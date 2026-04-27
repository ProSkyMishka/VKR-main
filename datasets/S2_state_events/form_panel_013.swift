import SwiftUI

struct ContentView: View {
    @State private var name = "fp013-init"
    @State private var on = false
    @State private var qty = 1
    @State private var summary = "fp013-pending"

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("fp013-name: " + name).font(.subheadline)
            Toggle("fp013-flag", isOn: $on)
            HStack {
                Button("fp013-qtyDown") { if qty > 0 { qty -= 1 } }
                Text("fp013-qty: \(qty)")
                Button("fp013-qtyUp") { qty += 1 }
            }
            Text(summary)
                .font(.headline)
            Button("fp013-submit") {
                summary = "fp013-done q=\(qty) f=\(on ? 1 : 0)"
            }
        }
        .padding()
    }
}
