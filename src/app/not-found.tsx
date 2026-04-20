import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-50 px-6">
      <div className="text-center max-w-md">
        <div className="text-[6rem] font-bold gradient-title leading-none mb-4">404</div>
        <h1 className="text-heading-lg text-warm-900 mb-3">Page introuvable</h1>
        <p className="text-body-md text-warm-600 mb-8">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex"
        >
          <ArrowLeft size={18} />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
