export const blogCoverUrl = process.env.REACT_APP_STORAGE_PUBLIC_URL
export const blogAppUrl = process.env.REACT_APP_BLOG_APP_URL
export const emailServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID
export const emailTemplateId = process.env.REACT_APP_EMAIL_SERVICE_TEMPLATE_ID
export const emailPublicKey = process.env.REACT_APP_EMAIL_SERVICE_PUBLIC_KEY
export const isAuth = localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY)
export const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:3000";