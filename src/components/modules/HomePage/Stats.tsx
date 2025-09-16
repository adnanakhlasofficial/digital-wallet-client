export default function Stats() {
  return (
    <div className="border-y bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary">
              $2.5B+
            </div>
            <div className="text-sm text-muted-foreground">
              Transferred safely
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary">
              2M+
            </div>
            <div className="text-sm text-muted-foreground">Active users</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary">
              99.9%
            </div>
            <div className="text-sm text-muted-foreground">
              Uptime guarantee
            </div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-primary">
              4.9★
            </div>
            <div className="text-sm text-muted-foreground">
              App store rating
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
