import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="space-x-4">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
            Terms of Service
          </Link>
          <Link href="/support" className="text-sm text-muted-foreground hover:underline">
            Contact Support
          </Link>
        </div>
        <div className="text-sm text-muted-foreground">
          Current Session: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </footer>
  )
}

