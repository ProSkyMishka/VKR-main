import SwiftUI

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    @State private var c = 0

    var body: some View {
        VStack(spacing: 8) {
            Text("mc004-a: \(a)")
            Text("mc004-b: \(b)")
            Text("mc004-c: \(c)")
            HStack {
                Button("mc004-incA") { a += 1 }
                Button("mc004-incB") { b += 2 }
                Button("mc004-incC") { c += 3 }
            }
            HStack {
                Button("mc004-rstA") { a = 0 }
                Button("mc004-rstB") { b = 0 }
                Button("mc004-rstC") { c = 0 }
            }
        }
        .padding()
    }
}
