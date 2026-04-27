import SwiftUI

struct ContentView: View {
    @State private var name = "fp010-init"
    @State private var on = false
    @State private var qty = 1
    @State private var summary = "fp010-pending"

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("fp010-name: " + name).font(.subheadline)
            Toggle("fp010-flag", isOn: $on)
            HStack {
                Button("fp010-qtyDown") { if qty > 0 { qty -= 1 } }
                Text("fp010-qty: \(qty)")
                Button("fp010-qtyUp") { qty += 1 }
            }
            Text(summary)
                .font(.headline)
            Button("fp010-submit") {
                summary = "fp010-done q=\(qty) f=\(on ? 1 : 0)"
            }
        }
        .padding()
    }
}
