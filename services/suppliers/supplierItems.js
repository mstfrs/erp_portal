'use client'

  export async function supplierItems(session, params) {


  try {
    const qs = new URLSearchParams()
    if (params?.supplier) qs.set('supplier', String(params.supplier))
    if (params?.limit) qs.set('limit', String(params.limit))

    const url = qs.toString() ? `/api/supplierItems?${qs.toString()}` : '/api/supplierItems'

    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
      throw new Error(`HTTP Hata! Durum: ${response.status}`);
    }

    const data = await response.json();
    return data.message;

  } catch (error) {
    console.error("Tedarikçiler çekilirken bir hata oluştu:", error);
    return null;
  }
}
