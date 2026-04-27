import SwiftUI

struct ContentView: View {
    @State private var name = "fp001-init"
    @State private var on = false
    @State private var qty = 1
    @State private var summary = "fp001-pending"

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("fp001-name: " + name).font(.subheadline)
            Toggle("fp001-flag", isOn: $on)
            HStack {
                Button("fp001-qtyDown") { if qty > 0 { qty -= 1 } }
                Text("fp001-qty: \(qty)")
                Button("fp001-qtyUp") { qty += 1 }
            }
            Text(summary)
                .font(.headline)
            Button("fp001-submit") {
                summary = "fp001-done q=\(qty) f=\(on ? 1 : 0)"
            }
        }
        .padding()
    }
}
