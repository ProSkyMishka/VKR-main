import SwiftUI

struct ContentView: View {
    @State private var n = 0
    let limit = 5

    var body: some View {
        VStack(spacing: 10) {
            Text("bc002-n: \(n)/\(limit)")
                .font(.headline)
            HStack {
                Button("bc002-up") {
                    if n < limit { n += 1 }
                }
                Button("bc002-down") {
                    if n > 0 { n -= 1 }
                }
            }
            if n == limit {
                Text("bc002-max-reached").foregroundColor(.red)
            }
        }
        .padding()
    }
}
