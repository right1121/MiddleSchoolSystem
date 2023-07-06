const zeroPadding = (digits: number, value: number) => ( '0'.repeat(digits) + value ).slice( -digits )

export { zeroPadding }
