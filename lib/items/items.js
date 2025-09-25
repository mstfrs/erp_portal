'use client'

export async function getItems(session, params = {}) {


  try {
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    })

    if (!response.ok) {
      throw new Error(`HTTP Hata! Durum: ${response.status}`);
    }

    const data = await response.json();
    return data.data;

  } catch (error) {
    console.error("Ürünler çekilirken bir hata oluştu:", error);
    return null;
  }
}
