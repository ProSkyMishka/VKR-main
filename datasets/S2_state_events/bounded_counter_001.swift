import SwiftUI

struct ContentView: View {
    @State private var n = 0
    let limit = 4

    var body: some View {
        VStack(spacing: 10) {
            Text("bc001-n: \(n)/\(limit)")
                .font(.headline)
            HStack {
                Button("bc001-up") {
                    if n < limit { n += 1 }
                }
                Button("bc001-down") {
                    if n > 0 { n -= 1 }
                }
            }
            if n == limit {
                Text("bc001-max-reached").foregroundColor(.red)
            }
        }
        .padding()
    }
}
