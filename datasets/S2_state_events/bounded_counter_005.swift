import SwiftUI

struct ContentView: View {
    @State private var n = 0
    let limit = 8

    var body: some View {
        VStack(spacing: 10) {
            Text("bc005-n: \(n)/\(limit)")
                .font(.headline)
            HStack {
                Button("bc005-up") {
                    if n < limit { n += 1 }
                }
                Button("bc005-down") {
                    if n > 0 { n -= 1 }
                }
            }
            if n == limit {
                Text("bc005-max-reached").foregroundColor(.red)
            }
        }
        .padding()
    }
}
