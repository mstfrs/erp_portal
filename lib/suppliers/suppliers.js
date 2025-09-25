'use client'

export async function getSuppliers() {


  try {
    const response = await fetch('/api/suppliers', {
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
