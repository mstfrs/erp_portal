import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

export async function GET(request) {
  const session = await getServerSession(authOptions)

  if (!session?.sid) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const supplier = searchParams.get("supplier")

  const baseUrl = `${process.env.NEXT_PUBLIC_SITE_NAME}/api/method/culinary.wp_api.get_supplier_items`
  const targetUrl = supplier
    ? `${baseUrl}?supplier=${encodeURIComponent(supplier)}`
    : baseUrl

  const res = await fetch(
    targetUrl,
    {
      headers: {
        "Content-Type": "application/json",
        "Cookie": session.sid, // ERPNext session cookie
      },
      
    }
  )

  const data = await res.json()
  return Response.json(data)
}

// export async function POST(request) {
//   const session = await getServerSession(authOptions)

//   if (!session?.sid) {
//     return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 })
//   }

//   let params = {}
//   try {
//     params = await request.json()
//   } catch (e) {}

//   const supplier = params.supplier
//   const baseUrl = `${process.env.NEXT_PUBLIC_SITE_NAME}/api/resource`

//   // Eğer supplier parametresi geldiyse, önce Item Supplier'dan parent'ları çekiyoruz
//   if (supplier) {
//     const debug = params.debug === true
//     const debugMeta = { supplier: String(supplier).trim() }

//     const qs = new URLSearchParams()
//     const fields = params.fields ?? '["name","item_name","item_group","supplier_items.supplier","supplier_items.supplier_part_no"]'
//     qs.set("fields", typeof fields === "string" ? fields : JSON.stringify(fields))
//     // Çocuk tablo (Item Supplier) üzerinden doğrudan filtre
//     qs.set("filters", JSON.stringify([["Item Supplier", "supplier", "=", String(supplier).trim()]]))
//     qs.set("limit_page_length", params.limit ? String(params.limit) : "50")
//     if (params.order_by) qs.set("order_by", params.order_by)
//     qs.set("expand", "1")

//     const erpUrlDirect = `${baseUrl}/Item?${qs.toString()}`
//     if (debug) debugMeta.erpUrlDirect = erpUrlDirect

//     const resDirect = await fetch(erpUrlDirect, {
//       headers: {
//         "Content-Type": "application/json",
//         "Cookie": session.sid,
//       },
//     })

//     const dataDirect = await resDirect.json()
//     if (debug) debugMeta.directCount = Array.isArray(dataDirect?.data) ? dataDirect.data.length : -1

//     if (Array.isArray(dataDirect?.data) && dataDirect.data.length > 0) {
//       return Response.json(debug ? { ...dataDirect, __debug: debugMeta } : dataDirect)
//     }

//     // LIKE fallback (eşleşme hassasiyetini yumuşat)
//     const qsLike = new URLSearchParams()
//     qsLike.set("fields", typeof fields === "string" ? fields : JSON.stringify(fields))
//     qsLike.set("filters", JSON.stringify([["Item Supplier", "supplier", "like", `${String(supplier).trim()}%`]]))
//     qsLike.set("limit_page_length", params.limit ? String(params.limit) : "50")
//     if (params.order_by) qsLike.set("order_by", params.order_by)
//     qsLike.set("expand", "1")

//     const erpUrlLike = `${baseUrl}/Item?${qsLike.toString()}`
//     if (debug) debugMeta.erpUrlLike = erpUrlLike

//     const resLike = await fetch(erpUrlLike, {
//       headers: {
//         "Content-Type": "application/json",
//         "Cookie": session.sid,
//       },
//     })
//     const dataLike = await resLike.json()
//     if (debug) debugMeta.likeCount = Array.isArray(dataLike?.data) ? dataLike.data.length : -1

//     if (Array.isArray(dataLike?.data) && dataLike.data.length > 0) {
//       return Response.json(debug ? { ...dataLike, __debug: debugMeta } : dataLike)
//     }

//     // Fallback: önce Item Supplier'dan parent'ları çek, sonra Item'ları getir
//     const qs1 = new URLSearchParams()
//     qs1.set("fields", JSON.stringify(["parent"]))
//     qs1.set("filters", JSON.stringify([["supplier", "=", String(supplier).trim()]]))
//     const erpUrlParents = `${baseUrl}/Item Supplier?${qs1.toString()}`
//     if (debug) debugMeta.erpUrlParents = erpUrlParents

//     const resParents = await fetch(erpUrlParents,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "Cookie": session.sid,
//         },
//       }
//     )

//     const supplierItems = await resParents.json()
//     const itemCodes = supplierItems?.data?.map(si => si.parent) || []
//     if (debug) debugMeta.parentsCount = itemCodes.length

//     if (itemCodes.length === 0) {
//       return Response.json(debug ? { data: [], __debug: debugMeta } : { data: [] })
//     }

//     const qs2 = new URLSearchParams()
//     qs2.set("fields", typeof fields === "string" ? fields : JSON.stringify(fields))
//     qs2.set("filters", JSON.stringify([["name", "in", itemCodes]]))
//     qs2.set("limit_page_length", params.limit ? String(params.limit) : "50")
//     if (params.order_by) qs2.set("order_by", params.order_by)
//     qs2.set("expand", "1")

//     const erpUrlByNames = `${baseUrl}/Item?${qs2.toString()}`
//     if (debug) debugMeta.erpUrlByNames = erpUrlByNames

//     const resByNames = await fetch(erpUrlByNames, {
//       headers: {
//         "Content-Type": "application/json",
//         "Cookie": session.sid,
//       },
//     })

//     const dataByNames = await resByNames.json()
//     if (debug) debugMeta.byNamesCount = Array.isArray(dataByNames?.data) ? dataByNames.data.length : -1
//     return Response.json(debug ? { ...dataByNames, __debug: debugMeta } : dataByNames)
//   }

//   // Eğer supplier parametresi yoksa, normal Item çağrısı yapıyoruz
//   const qs = new URLSearchParams()
//   const fields = params.fields ?? '["*"]'
//   qs.set("fields", typeof fields === "string" ? fields : JSON.stringify(fields))
//   qs.set("limit", params.limit ? String(params.limit) : "10")
//   if (params.order_by) qs.set("order_by", params.order_by)
//   if (params.filters) {
//     const v = typeof params.filters === "string" ? params.filters : JSON.stringify(params.filters)
//     qs.set("filters", v)
//   }
//   if (params.or_filters) {
//     const v = typeof params.or_filters === "string" ? params.or_filters : JSON.stringify(params.or_filters)
//     qs.set("or_filters", v)
//   }

//   const erpUrl = `${baseUrl}/Item?${qs.toString()}`

//   const res = await fetch(erpUrl, {
//     headers: {
//       "Content-Type": "application/json",
//       "Cookie": session.sid,
//     },
//   })

//   const data = await res.json()
//   return Response.json(data)
// }
