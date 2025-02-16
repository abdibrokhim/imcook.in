export const handleDownload = async (downloadUrl: string, downloadName: string) => {
    try {
      const a = document.createElement('a')
      a.href = downloadUrl
      a.download = downloadName
      a.click()
    } catch (error) {
      console.error('An error occurred:', error)
    }
};