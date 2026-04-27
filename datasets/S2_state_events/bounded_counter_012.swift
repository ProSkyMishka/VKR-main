import SwiftUI

struct ContentView: View {
    @State private var n = 0
    let limit = 8

    var body: some View {
        VStack(spacing: 10) {
            Text("bc012-n: \(n)/\(limit)")
                .font(.headline)
            HStack {
                Button("bc012-up") {
                    if n < limit { n += 1 }
                }
                Button("bc012-down") {
                    if n > 0 { n -= 1 }
                }
            }
            if n == limit {
                Text("bc012-max-reached").foregroundColor(.red)
            }
        }
        .padding()
    }
}
