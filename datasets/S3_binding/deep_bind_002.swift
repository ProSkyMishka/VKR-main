import SwiftUI

struct Granddb002: View {
    @Binding var n: Int
    var body: some View {
        Button("db002-deep") { n += 1 }
    }
}

struct Middb002: View {
    @Binding var n: Int
    var body: some View {
        Granddb002(n: $n)
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("db002-root: \(n)")
            Middb002(n: $n)
        }
        .padding()
    }
}
