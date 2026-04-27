import SwiftUI

struct ContentView: View {
    @State private var name = "fp007-init"
    @State private var on = false
    @State private var qty = 1
    @State private var summary = "fp007-pending"

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("fp007-name: " + name).font(.subheadline)
            Toggle("fp007-flag", isOn: $on)
            HStack {
                Button("fp007-qtyDown") { if qty > 0 { qty -= 1 } }
                Text("fp007-qty: \(qty)")
                Button("fp007-qtyUp") { qty += 1 }
            }
            Text(summary)
                .font(.headline)
            Button("fp007-submit") {
                summary = "fp007-done q=\(qty) f=\(on ? 1 : 0)"
            }
        }
        .padding()
    }
}
