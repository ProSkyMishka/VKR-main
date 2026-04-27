import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            ForEach(0..<5, id: \.self) { r in
                HStack {
                    ForEach(0..<2, id: \.self) { c in
                        Text("gf011-r\(r)c\(c)")
                    }
                }
            }
        }
        .padding()
    }
}
