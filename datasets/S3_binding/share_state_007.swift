import SwiftUI

struct Btnss007: View {
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
            Text("ss007-sum: \(n)")
            Btnss007(label: "ss007-A", n: $n)
            Btnss007(label: "ss007-B", n: $n)
        }
        .padding()
    }
}
