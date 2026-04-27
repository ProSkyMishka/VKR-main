import SwiftUI

struct ContentView: View {
    @State private var name = "fp014-init"
    @State private var on = false
    @State private var qty = 1
    @State private var summary = "fp014-pending"

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("fp014-name: " + name).font(.subheadline)
            Toggle("fp014-flag", isOn: $on)
            HStack {
                Button("fp014-qtyDown") { if qty > 0 { qty -= 1 } }
                Text("fp014-qty: \(qty)")
                Button("fp014-qtyUp") { qty += 1 }
            }
            Text(summary)
                .font(.headline)
            Button("fp014-submit") {
                summary = "fp014-done q=\(qty) f=\(on ? 1 : 0)"
            }
        }
        .padding()
    }
}
