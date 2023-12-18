export interface DevProject {
    title: string;
    description: string;
    smallDescription: string;
    appStoreLink?: string;
    playStoreLink?: string;
    tools?: string [];
    images: string [];
    logo: string;
    appType: AppType
}

export type AppType = "Mobile" | "Web" | "LibMobile"