import SwiftUI

struct ContentView: View {
    @State private var name = "fp004-init"
    @State private var on = false
    @State private var qty = 1
    @State private var summary = "fp004-pending"

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("fp004-name: " + name).font(.subheadline)
            Toggle("fp004-flag", isOn: $on)
            HStack {
                Button("fp004-qtyDown") { if qty > 0 { qty -= 1 } }
                Text("fp004-qty: \(qty)")
                Button("fp004-qtyUp") { qty += 1 }
            }
            Text(summary)
                .font(.headline)
            Button("fp004-submit") {
                summary = "fp004-done q=\(qty) f=\(on ? 1 : 0)"
            }
        }
        .padding()
    }
}
