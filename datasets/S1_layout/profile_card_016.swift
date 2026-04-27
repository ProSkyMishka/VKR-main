import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: "person.crop.circle.fill")
                .font(.system(size: 72))
                .foregroundColor(.blue)
            VStack(spacing: 2) {
                Text("pc016-name")
                    .font(.title2)
                    .bold()
                Text("pc016-handle")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            Text("pc016-bio short")
                .font(.subheadline)
                .multilineTextAlignment(.center)
                .padding(.horizontal)
            HStack(spacing: 24) {
                VStack { Text("pc016-posts"); Text("\(26)").bold() }
                VStack { Text("pc016-followers"); Text("\(116)").bold() }
                VStack { Text("pc016-likes"); Text("\(1016)").bold() }
            }
        }
        .padding()
    }
}
