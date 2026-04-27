import SwiftUI

struct ContentView: View {
    @State private var name = "fp005-init"
    @State private var on = false
    @State private var qty = 1
    @State private var summary = "fp005-pending"

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("fp005-name: " + name).font(.subheadline)
            Toggle("fp005-flag", isOn: $on)
            HStack {
                Button("fp005-qtyDown") { if qty > 0 { qty -= 1 } }
                Text("fp005-qty: \(qty)")
                Button("fp005-qtyUp") { qty += 1 }
            }
            Text(summary)
                .font(.headline)
            Button("fp005-submit") {
                summary = "fp005-done q=\(qty) f=\(on ? 1 : 0)"
            }
        }
        .padding()
    }
}
