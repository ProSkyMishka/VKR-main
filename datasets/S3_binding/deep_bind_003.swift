import SwiftUI

struct Granddb003: View {
    @Binding var n: Int
    var body: some View {
        Button("db003-deep") { n += 1 }
    }
}

struct Middb003: View {
    @Binding var n: Int
    var body: some View {
        Granddb003(n: $n)
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("db003-root: \(n)")
            Middb003(n: $n)
        }
        .padding()
    }
}
