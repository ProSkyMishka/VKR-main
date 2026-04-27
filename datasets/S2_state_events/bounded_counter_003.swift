import SwiftUI

struct ContentView: View {
    @State private var n = 0
    let limit = 6

    var body: some View {
        VStack(spacing: 10) {
            Text("bc003-n: \(n)/\(limit)")
                .font(.headline)
            HStack {
                Button("bc003-up") {
                    if n < limit { n += 1 }
                }
                Button("bc003-down") {
                    if n > 0 { n -= 1 }
                }
            }
            if n == limit {
                Text("bc003-max-reached").foregroundColor(.red)
            }
        }
        .padding()
    }
}
