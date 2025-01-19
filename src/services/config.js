import { createClient } from '@supabase/supabase-js'

export const blogCoverUrl = process.env.REACT_APP_STORAGE_PUBLIC_URL
export const blogAppUrl = process.env.REACT_APP_BLOG_APP_URL
export const emailServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID
export const emailTemplateId = process.env.REACT_APP_EMAIL_SERVICE_TEMPLATE_ID
export const emailPublicKey = process.env.REACT_APP_EMAIL_SERVICE_PUBLIC_KEY
export const projectStorageUrl = process.env.REACT_APP_STORAGE_PROJECTS_PUBLIC_URL;
export const isAuth = localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY)
export const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

const portfolioUrl = process.env.REACT_APP_PORTFOLIO_URL
const portfolioAnonKey = process.env.REACT_APP_PORTFOLIO_ANON_KEY
const blogUrl = process.env.REACT_APP_BLOG_URL
const blogAnonKey = process.env.REACT_APP_BLOG_ANON_KEY

export const portfolioClient = createClient(portfolioUrl, portfolioAnonKey)
export const blogClient = createClient(blogUrl, blogAnonKey)