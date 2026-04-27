import SwiftUI

struct ContentView: View {
    @State private var name = "fp011-init"
    @State private var on = false
    @State private var qty = 1
    @State private var summary = "fp011-pending"

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("fp011-name: " + name).font(.subheadline)
            Toggle("fp011-flag", isOn: $on)
            HStack {
                Button("fp011-qtyDown") { if qty > 0 { qty -= 1 } }
                Text("fp011-qty: \(qty)")
                Button("fp011-qtyUp") { qty += 1 }
            }
            Text(summary)
                .font(.headline)
            Button("fp011-submit") {
                summary = "fp011-done q=\(qty) f=\(on ? 1 : 0)"
            }
        }
        .padding()
    }
}
