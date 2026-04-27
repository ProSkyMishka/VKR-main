import SwiftUI

struct Granddb001: View {
    @Binding var n: Int
    var body: some View {
        Button("db001-deep") { n += 1 }
    }
}

struct Middb001: View {
    @Binding var n: Int
    var body: some View {
        Granddb001(n: $n)
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("db001-root: \(n)")
            Middb001(n: $n)
        }
        .padding()
    }
}
