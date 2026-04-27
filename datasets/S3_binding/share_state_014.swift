import SwiftUI

struct Btnss014: View {
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
            Text("ss014-sum: \(n)")
            Btnss014(label: "ss014-A", n: $n)
            Btnss014(label: "ss014-B", n: $n)
        }
        .padding()
    }
}
