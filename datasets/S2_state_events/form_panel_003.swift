import SwiftUI

struct ContentView: View {
    @State private var name = "fp003-init"
    @State private var on = false
    @State private var qty = 1
    @State private var summary = "fp003-pending"

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("fp003-name: " + name).font(.subheadline)
            Toggle("fp003-flag", isOn: $on)
            HStack {
                Button("fp003-qtyDown") { if qty > 0 { qty -= 1 } }
                Text("fp003-qty: \(qty)")
                Button("fp003-qtyUp") { qty += 1 }
            }
            Text(summary)
                .font(.headline)
            Button("fp003-submit") {
                summary = "fp003-done q=\(qty) f=\(on ? 1 : 0)"
            }
        }
        .padding()
    }
}
