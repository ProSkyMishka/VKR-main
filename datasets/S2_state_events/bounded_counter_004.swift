import SwiftUI

struct ContentView: View {
    @State private var n = 0
    let limit = 7

    var body: some View {
        VStack(spacing: 10) {
            Text("bc004-n: \(n)/\(limit)")
                .font(.headline)
            HStack {
                Button("bc004-up") {
                    if n < limit { n += 1 }
                }
                Button("bc004-down") {
                    if n > 0 { n -= 1 }
                }
            }
            if n == limit {
                Text("bc004-max-reached").foregroundColor(.red)
            }
        }
        .padding()
    }
}
