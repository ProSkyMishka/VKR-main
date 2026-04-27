import SwiftUI

struct Granddb010: View {
    @Binding var n: Int
    var body: some View {
        Button("db010-deep") { n += 1 }
    }
}

struct Middb010: View {
    @Binding var n: Int
    var body: some View {
        Granddb010(n: $n)
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("db010-root: \(n)")
            Middb010(n: $n)
        }
        .padding()
    }
}
