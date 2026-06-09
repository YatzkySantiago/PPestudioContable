export const siteConfig = {
  studioName: "Estudio Contable Patricia Perez",
  serviceName: "Carpeta Bancaria Ampliada",
  // Reemplazar con datos reales
  phone: "+54 9 294 000 0000",
  whatsappNumber: "5492940000000",
  whatsappMessage:
    "Hola, quiero más información sobre el servicio de Carpeta Bancaria Ampliada para mi Pyme.",
  email: "lorem@ipsum.com.ar",
  address: "General Fernandez Oro, Río Negro, Argentina",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
}

export function getWhatsappUrl() {
  const text = encodeURIComponent(siteConfig.whatsappMessage)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`
}
