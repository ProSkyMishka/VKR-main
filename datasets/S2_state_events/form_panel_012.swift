import SwiftUI

struct ContentView: View {
    @State private var name = "fp012-init"
    @State private var on = false
    @State private var qty = 1
    @State private var summary = "fp012-pending"

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("fp012-name: " + name).font(.subheadline)
            Toggle("fp012-flag", isOn: $on)
            HStack {
                Button("fp012-qtyDown") { if qty > 0 { qty -= 1 } }
                Text("fp012-qty: \(qty)")
                Button("fp012-qtyUp") { qty += 1 }
            }
            Text(summary)
                .font(.headline)
            Button("fp012-submit") {
                summary = "fp012-done q=\(qty) f=\(on ? 1 : 0)"
            }
        }
        .padding()
    }
}
