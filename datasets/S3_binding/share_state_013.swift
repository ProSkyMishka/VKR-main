import SwiftUI

struct Btnss013: View {
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
            Text("ss013-sum: \(n)")
            Btnss013(label: "ss013-A", n: $n)
            Btnss013(label: "ss013-B", n: $n)
        }
        .padding()
    }
}
