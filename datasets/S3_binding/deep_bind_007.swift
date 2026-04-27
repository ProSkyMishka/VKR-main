import SwiftUI

struct Granddb007: View {
    @Binding var n: Int
    var body: some View {
        Button("db007-deep") { n += 1 }
    }
}

struct Middb007: View {
    @Binding var n: Int
    var body: some View {
        Granddb007(n: $n)
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("db007-root: \(n)")
            Middb007(n: $n)
        }
        .padding()
    }
}
