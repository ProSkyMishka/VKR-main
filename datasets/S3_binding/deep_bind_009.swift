import SwiftUI

struct Granddb009: View {
    @Binding var n: Int
    var body: some View {
        Button("db009-deep") { n += 1 }
    }
}

struct Middb009: View {
    @Binding var n: Int
    var body: some View {
        Granddb009(n: $n)
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("db009-root: \(n)")
            Middb009(n: $n)
        }
        .padding()
    }
}
