import SwiftUI

struct ContentView: View {
    @State private var name = "fp009-init"
    @State private var on = false
    @State private var qty = 1
    @State private var summary = "fp009-pending"

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("fp009-name: " + name).font(.subheadline)
            Toggle("fp009-flag", isOn: $on)
            HStack {
                Button("fp009-qtyDown") { if qty > 0 { qty -= 1 } }
                Text("fp009-qty: \(qty)")
                Button("fp009-qtyUp") { qty += 1 }
            }
            Text(summary)
                .font(.headline)
            Button("fp009-submit") {
                summary = "fp009-done q=\(qty) f=\(on ? 1 : 0)"
            }
        }
        .padding()
    }
}
