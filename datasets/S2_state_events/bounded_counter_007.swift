import SwiftUI

struct ContentView: View {
    @State private var n = 0
    let limit = 3

    var body: some View {
        VStack(spacing: 10) {
            Text("bc007-n: \(n)/\(limit)")
                .font(.headline)
            HStack {
                Button("bc007-up") {
                    if n < limit { n += 1 }
                }
                Button("bc007-down") {
                    if n > 0 { n -= 1 }
                }
            }
            if n == limit {
                Text("bc007-max-reached").foregroundColor(.red)
            }
        }
        .padding()
    }
}
