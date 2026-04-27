import SwiftUI

struct ContentView: View {
    @State private var n = 0
    let limit = 9

    var body: some View {
        VStack(spacing: 10) {
            Text("bc013-n: \(n)/\(limit)")
                .font(.headline)
            HStack {
                Button("bc013-up") {
                    if n < limit { n += 1 }
                }
                Button("bc013-down") {
                    if n > 0 { n -= 1 }
                }
            }
            if n == limit {
                Text("bc013-max-reached").foregroundColor(.red)
            }
        }
        .padding()
    }
}
