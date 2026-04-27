import SwiftUI

struct Btnss003: View {
    let label: String
    @Binding var n: Int
    var body: some View {
        Button(label) { n += 1 }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("ss003-sum: \(n)")
            Btnss003(label: "ss003-A", n: $n)
            Btnss003(label: "ss003-B", n: $n)
        }
        .padding()
    }
}
