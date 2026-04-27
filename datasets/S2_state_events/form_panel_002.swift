import SwiftUI

struct ContentView: View {
    @State private var name = "fp002-init"
    @State private var on = false
    @State private var qty = 1
    @State private var summary = "fp002-pending"

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("fp002-name: " + name).font(.subheadline)
            Toggle("fp002-flag", isOn: $on)
            HStack {
                Button("fp002-qtyDown") { if qty > 0 { qty -= 1 } }
                Text("fp002-qty: \(qty)")
                Button("fp002-qtyUp") { qty += 1 }
            }
            Text(summary)
                .font(.headline)
            Button("fp002-submit") {
                summary = "fp002-done q=\(qty) f=\(on ? 1 : 0)"
            }
        }
        .padding()
    }
}
