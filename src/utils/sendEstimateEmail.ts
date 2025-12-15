export type EstimateEmailPayload = {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  fileName: string
  fileDataBase64: string
}

export const sendEstimateEmail = async (payload: EstimateEmailPayload) => {
  const res = await fetch('/api/send-estimate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  if (!res.ok) {
    throw new Error('Failed to send estimate email')
  }
}
