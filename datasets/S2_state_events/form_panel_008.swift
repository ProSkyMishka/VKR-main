import SwiftUI

struct ContentView: View {
    @State private var name = "fp008-init"
    @State private var on = false
    @State private var qty = 1
    @State private var summary = "fp008-pending"

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("fp008-name: " + name).font(.subheadline)
            Toggle("fp008-flag", isOn: $on)
            HStack {
                Button("fp008-qtyDown") { if qty > 0 { qty -= 1 } }
                Text("fp008-qty: \(qty)")
                Button("fp008-qtyUp") { qty += 1 }
            }
            Text(summary)
                .font(.headline)
            Button("fp008-submit") {
                summary = "fp008-done q=\(qty) f=\(on ? 1 : 0)"
            }
        }
        .padding()
    }
}
