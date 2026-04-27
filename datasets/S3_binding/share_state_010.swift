import SwiftUI

struct Btnss010: View {
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
            Text("ss010-sum: \(n)")
            Btnss010(label: "ss010-A", n: $n)
            Btnss010(label: "ss010-B", n: $n)
        }
        .padding()
    }
}
