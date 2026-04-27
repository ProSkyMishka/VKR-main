import SwiftUI

struct Btnss009: View {
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
            Text("ss009-sum: \(n)")
            Btnss009(label: "ss009-A", n: $n)
            Btnss009(label: "ss009-B", n: $n)
        }
        .padding()
    }
}
