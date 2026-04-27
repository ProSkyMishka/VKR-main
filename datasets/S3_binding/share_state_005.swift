import SwiftUI

struct Btnss005: View {
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
            Text("ss005-sum: \(n)")
            Btnss005(label: "ss005-A", n: $n)
            Btnss005(label: "ss005-B", n: $n)
        }
        .padding()
    }
}
