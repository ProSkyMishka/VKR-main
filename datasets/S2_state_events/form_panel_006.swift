import SwiftUI

struct ContentView: View {
    @State private var name = "fp006-init"
    @State private var on = false
    @State private var qty = 1
    @State private var summary = "fp006-pending"

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("fp006-name: " + name).font(.subheadline)
            Toggle("fp006-flag", isOn: $on)
            HStack {
                Button("fp006-qtyDown") { if qty > 0 { qty -= 1 } }
                Text("fp006-qty: \(qty)")
                Button("fp006-qtyUp") { qty += 1 }
            }
            Text(summary)
                .font(.headline)
            Button("fp006-submit") {
                summary = "fp006-done q=\(qty) f=\(on ? 1 : 0)"
            }
        }
        .padding()
    }
}
