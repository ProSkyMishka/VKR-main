import SwiftUI

struct Childbi001: View {
    @Binding var n: Int
    var body: some View {
        Button("bi001-childInc") { n += 1 }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("bi001-total: \(n)")
            Childbi001(n: $n)
        }
        .padding()
    }
}
