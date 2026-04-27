import SwiftUI

struct Granddb004: View {
    @Binding var n: Int
    var body: some View {
        Button("db004-deep") { n += 1 }
    }
}

struct Middb004: View {
    @Binding var n: Int
    var body: some View {
        Granddb004(n: $n)
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("db004-root: \(n)")
            Middb004(n: $n)
        }
        .padding()
    }
}
