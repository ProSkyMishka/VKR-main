import SwiftUI

struct Childbi007: View {
    @Binding var n: Int
    var body: some View {
        Button("bi007-childInc") { n += 1 }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("bi007-total: \(n)")
            Childbi007(n: $n)
        }
        .padding()
    }
}
